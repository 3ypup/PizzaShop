#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'




get "/" do
		erb " <a href=\"https://github.com/bootstrap-ruby/sinatra-bootstrap\"></a>"		
		erb :index	

end


get "/about" do
			
		erb :about

end


