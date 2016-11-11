define({
	baseUrl:'http://localhost',
	port:9000,
	getBaseURL:function(){
		return this.baseUrl+":"+this.port;
	}
})