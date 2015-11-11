class DsCommentsController < ApplicationController


  def show
    @ds_comment = DsComment.find_by_id(params[:id])
    render :layout => false
  end

  def new
    @ds_comment = DsComment.new()
    render :layout => false
  end

  def create
    if ds_comment_params[:issue_id] && params[:selected_text].to_s > ""
      @issue = Issue.find(ds_comment_params[:issue_id])
      @ds_comment = DsComment.new(ds_comment_params)
      if @ds_comment.save
        @issue.update_attribute(:description,@issue.description.sub(params[:selected_text],"#{params[:selected_text]} {{##{@ds_comment.id}#}} "))
      end
    end
    render :text => ""
  end

  private
  def ds_comment_params
      params.require(:ds_comment).permit!
  end


end
