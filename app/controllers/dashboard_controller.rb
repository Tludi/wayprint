class DashboardController < ApplicationController
  def index
    @waypoints = Waypoint.all
  end
end
