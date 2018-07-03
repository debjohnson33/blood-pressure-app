class MeasurementSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :systolic_bp, :diastolic_bp, :pulse, :date_time, :notes, :created_at, :updated_at
end
