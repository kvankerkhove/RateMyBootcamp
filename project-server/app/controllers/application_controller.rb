class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/login' do
        users = User.all
        users.to_json
    end

    post '/signup' do
        new_user =  User.create(username: params[:username], password: params[:password])
        new_user.to_json
    end

    get '/bootcamps' do
        bootcamps = Bootcamp.all
        bootcamps.to_json(include: :reviews)
    end

    get '/users/:id' do
        user = User.find(params[:id])
        user.to_json
    end
    
    get '/bootcamps/:name' do
        bootcamp = Bootcamp.find_by(name: params[:name]).reviews.order(created_at: :desc)
        bootcamp.to_json
    end

    post '/bootcamps/:name' do
        bootcamp_id = Bootcamp.find_by(name: params[:name]).id.to_json
        Review.create(star_rating: params[:star_rating], comment: params[:comment], user_id: params[:user_id], bootcamp_id: bootcamp_id).to_json
    end

    get '/bootcamps/:name/:id' do
        reviews = Bootcamp.find_by(name: params[:name]).reviews
        review = reviews.find(params[:id])
        review.to_json
        
    end

    patch '/bootcamps/:name/:id' do
        review = Review.find(params[:id])
        review.update(star_rating: params[:star_rating], comment: params[:comment])
    end

    delete '/bootcamps/:name/:id' do
        Review.find(params[:id]).destroy
    end
    
  end