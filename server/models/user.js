let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
  name: {
  	type: String,
  	required: [true, "Please enter your name"],
  },
  email: {
  	type: String,
  	required: [true, "Please enter an email"],
  	unique: true,
  	validate: {
  		validator: function(value) {
  			return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
  		},
  		message: "Please enter a valid email"
  	}
  },
  password: {
  	type: String,
  	required: [true, "Password cannot be blank"],
  	minlength: [8, "Password needs to be at least 8 characters"],
  	validate: {
  		validator: function(value) {
  			return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
  		},
  		message: "Password needs to have at least 1 number, uppercase, and special character"
  	}
  },
  birthday: {
  	type: Date,
  	required: [true, "Enter your birthday"],
  	validate: {
  		validator: function(value) {
        let birthday = new Date(value);
        let curr = new Date();
        let diff = curr - birthday;
        let age = Math.floor(diff/31536000000);
        return (age >= 18);
  		},
      message: "Must be older than 18 to register"
  	}
  },
  hosting: [{
    type: Schema.Types.ObjectId, ref: 'Create'
  }],
  attending: [{
    type: Schema.Types.ObjectId, ref: 'Create'
  }],
  pending: [{
    type: Schema.Types.ObjectId, ref: 'Create'
  }],
  journal: [{
    type: Schema.Types.ObjectId, ref: 'Journal'
  }],
  tasks: []
},
   {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

// UserSchema.pre('save', function(next) {
//   if(this.password != this.password_confirm) {
//     // invalidate function passes in 'field', 'error message'
//     this.invalidate('password', "Password and Password Confirm do not match");
//     let err = new Error("Passwords don't match");
//     next(err);
//   } else{
//     // // returns a hashed string
//     // the complexity of the salt is what makes this password unique
//     this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
//     this.password_confirm = '';
//     next();
//   }
// })

let User = mongoose.model('User', UserSchema);
