json.array!(@waypoints) do |waypoint|
  json.extract! waypoint, :name, :location, :wayprint, :lat, :lng, :trip_id
  json.url waypoint_url(waypoint, format: :json)
end
