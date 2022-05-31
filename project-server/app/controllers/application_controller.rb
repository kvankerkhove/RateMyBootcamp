class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/login' do
        users = User.all
        users.to_json
    end

    post '/login/signup' do
        User.create(username: params[:username], password: params[:password])
    end

    get '/bootcamps' do
        bootcamps = Bootcamp.all
        bootcamps.to_json(include: :reviews)
    end

    get '/bootcamps/:name' do
        bootcamp = Bootcamp.find_by(name: params[:name]).reviews
        bootcamp.to_json
    end

    post '/bootcamps/:name' do
        Review.create(star_rating: params[:star_rating], comment: params[:comment], user_id: params[:user_id], bootcamp_id: params[:id])
    end

    # patch '/bootcamps/:id' do
    #     Review.find()

    # end



    
  end