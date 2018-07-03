class GoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :systolic_bp, :diastolic_bp, :frequency, :created_at, :updated_at
end
