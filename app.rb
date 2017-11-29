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

end