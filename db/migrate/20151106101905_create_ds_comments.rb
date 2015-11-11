class CreateDsComments < ActiveRecord::Migration
  def change
    create_table :ds_comments do |t|
      t.text :comment
      t.integer :ds_comment_id
      t.integer :commented_by
      t.integer :issue_id

      t.timestamps null: false
    end
    add_index :ds_comments, :ds_comment_id
    add_index :ds_comments, :commented_by
    add_index :ds_comments, :issue_id
  end
end
