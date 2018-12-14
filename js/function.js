new Vue({
    el: '#app',
    data: {
    	login:'',
        email: '',
        phone: '',
        sex:'',
        dateUser:'',
        password: '',
        passwordConfirm: '',
        selected: 'красный',
          options: [
            { text: 'красный', value: 'красный' },
            { text: 'оранжевый', value: 'оранжевый' },
            { text: 'желтый', value: 'желтый' }
          ],

    },
    computed: {
      isEmailValid: function() {
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
      },
      isPhoneValid: function() {
          return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(this.phone);
      },
      isPasswordLength: function()
      {
      	return this.password.length >= 6;
      },
      isPasswordEqual: function(){
      	return this.password == this.passwordConfirm;
      },
      isPasswordValid: function() {
      	return this.isPasswordEqual && this.isPasswordLength;
      },
      isLoginValid: function() {
      	return /^[a-zA-Z0-9]{6,20}$/.test(this.login);
      },
      isFormValid: function() {
      	var errors = [];
      	if (!this.login.length || !this.isLoginValid)
      	{
			errors.push('login');
      	}
		if (!this.email.length || !this.isEmailValid)
		{
			errors.push('email');
		}
		if (!this.phone.length || !this.isPhoneValid)
		{
			errors.push('phone');
		}
		if (!this.selected.length)
		{
			errors.push('selected');
		}
		if (!this.password.length || !this.isPasswordValid)
		{
			errors.push('password');
		}
		if (!this.sex.length) 
		{
			errors.push('sex');
		}
		if (!this.dateUser.length) 
		{
			errors.push('dateUser');
		}
		return !errors.length;
      }
    },
    methods:{
    	checkForm:function(e) {
    		if (!this.isFormValid)
    		{
    			e.preventDefault();
    		}
    	}
  	}
});
