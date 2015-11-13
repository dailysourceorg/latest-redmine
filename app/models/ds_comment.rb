class DsComment < ActiveRecord::Base
  has_many :ds_comments
  validates :comment, :presence => true

end
