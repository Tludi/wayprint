require 'test_helper'

class WaypointsControllerTest < ActionController::TestCase
  setup do
    @waypoint = waypoints(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:waypoints)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create waypoint" do
    assert_difference('Waypoint.count') do
      post :create, waypoint: { lat: @waypoint.lat, lng: @waypoint.lng, location: @waypoint.location, name: @waypoint.name, trip_id: @waypoint.trip_id, wayprint: @waypoint.wayprint }
    end

    assert_redirected_to waypoint_path(assigns(:waypoint))
  end

  test "should show waypoint" do
    get :show, id: @waypoint
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @waypoint
    assert_response :success
  end

  test "should update waypoint" do
    patch :update, id: @waypoint, waypoint: { lat: @waypoint.lat, lng: @waypoint.lng, location: @waypoint.location, name: @waypoint.name, trip_id: @waypoint.trip_id, wayprint: @waypoint.wayprint }
    assert_redirected_to waypoint_path(assigns(:waypoint))
  end

  test "should destroy waypoint" do
    assert_difference('Waypoint.count', -1) do
      delete :destroy, id: @waypoint
    end

    assert_redirected_to waypoints_path
  end
end
