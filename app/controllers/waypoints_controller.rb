class WaypointsController < ApplicationController
  before_action :set_waypoint, only: [:show, :edit, :update, :destroy]

  # GET /waypoints
  # GET /waypoints.json
  def index
    @waypoints = Waypoint.all
    gon.waypoints = Waypoint.all
    @waypoint = Waypoint.new
    @w = Waypoint.first
  end

  # GET /waypoints/1
  # GET /waypoints/1.json
  def show
  end

  # GET /waypoints/new
  def new
    @waypoint = Waypoint.new
  end

  # GET /waypoints/1/edit
  def edit
  end

  # POST /waypoints
  # POST /waypoints.json
  def create
    @waypoint = Waypoint.new(waypoint_params)

    respond_to do |format|
      if @waypoint.save
        format.html { redirect_to waypoints_path, notice: 'Waypoint was successfully created.' }
        format.json { render action: 'show', status: :created, location: @waypoint }
      else
        format.html { render action: 'new' }
        format.json { render json: @waypoint.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /waypoints/1
  # PATCH/PUT /waypoints/1.json
  def update
    respond_to do |format|
      if @waypoint.update(waypoint_params)
        format.html { redirect_to waypoints_path, notice: 'Waypoint was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @waypoint.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /waypoints/1
  # DELETE /waypoints/1.json
  def destroy
    @waypoint.destroy
    respond_to do |format|
      format.html { redirect_to waypoints_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_waypoint
      @waypoint = Waypoint.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def waypoint_params
      params.require(:waypoint).permit(:name, :location, :wayprint, :lat, :lng, :trip_id)
    end
end
