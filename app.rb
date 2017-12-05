#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base

end

get "/" do
	
		erb " <a href=\"https://github.com/bootstrap-ruby/sinatra-bootstrap\"></a>"		
		erb :index	

end


get "/about" do
			
		erb :about

end

get '/table' do



	@products = Product.order "created_at"


	 erb :table
end


post "/table" do
	
	erb "Hello"

	@products = Product.order "created_at"

	erb :table

end



post "/cart" do


@products = Product.order "created_at"

@col1 = params[:col1]
@col2 = params[:col2]
@col3 = params[:col3]
@col4 = params[:col4]
@col5 = params[:col5]
@col6 = params[:col6]

@sum = 0

@prices =[@col1, @col2, @col3, @col4, @col5, @col6]



erb :cart


end