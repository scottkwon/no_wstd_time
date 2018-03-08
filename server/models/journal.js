let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let JournalSchema = new mongoose.Schema({
  mood: {
  	type: String
  },
  entry: {
  	type: String
  },
  date: {
    type: Date
  },
  _User: {
    type: Schema.Types.ObjectId, ref: 'User'
  }
},
   {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

let Journal = mongoose.model('Journal', JournalSchema);
