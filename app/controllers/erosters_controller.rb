class ErostersController < ApplicationController
  before_action :set_eroster, only: [:show, :update, :destroy]

  # GET /erosters
  def index
    @erosters = Eroster.all

    render json: @erosters
  end

  # GET /erosters/1
  def show
    render json: @eroster
  end

  # POST /erosters
  def create
    @eroster = Eroster.new(eroster_params)

    if @eroster.save
      render json: @eroster, status: :created, location: @eroster
    else
      render json: @eroster.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /erosters/1
  def update
    if @eroster.update(eroster_params)
      render json: @eroster
    else
      render json: @eroster.errors, status: :unprocessable_entity
    end
  end

  # DELETE /erosters/1
  def destroy
    @eroster.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_eroster
      @eroster = Eroster.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def eroster_params
      params.fetch(:eroster, {})
    end
end
