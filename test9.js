define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Partner', //Will appear in the data.
		    title : {
		      media : {word : 'Partner Name'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
			media : [ //Stimuli
				{word: 'PartnerNickname1'},
				{word: 'PartnerNickname2'},
				{word: 'PartnerNickname3'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  		attribute1 : 
			{
			name : 'Unpleasant', //Attribute label
			title : {
				media : {word : 'Negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Bomb'},
				{word: 'Abuse'},
				{word: 'Sadness'},
				{word: 'Pain'},
				{word: 'Poison'},
				{word: 'Grief'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Pleasant', //Attribute label
			title : {
				media : {word : 'Positive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Paradise'},
				{word: 'Pleasure'},
				{word: 'Cheer'},
				{word: 'Wonderful'},
				{word: 'Splendid'},
				{word: 'Love'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

trialsByBlock :
            [//Each object in this array defines a block
                {
                    instHTML : '', //Empty means we will create the inst from the instTemplate variable further below.
                    block : 1, //The block variable is not used later, but could help the user.
                    //In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
                    miniBlocks : 1, //Set to 1 if don't need mini blocks. 0 will break the task.
                    singleAttTrials : 3, //Number of trials of the attribute that does not share key with the category (in a mini block).
                    sharedAttTrials : 3, //Number of trials of the attribute that shares key with the category (in a mini block).
                    categoryTrials : 0 // Number of trials of the category (in a mini-block). If 0, the label does not appear.
                    //Note: if no category trials, then attribute1, the one on the left, is considered the single attribute.
                },
                {
                    instHTML : '',
                    block : 2
,
                    miniBlocks : 1,
                    singleAttTrials : 1,
                    sharedAttTrials : 1,
                    categoryTrials : 1
                },
                {
                    instHTML : '',
                    block : 3,
                    miniBlocks : 1,
                    singleAttTrials : 1,
                    sharedAttTrials : 1,
                    categoryTrials : 1
                },
                {
                    instHTML : '',
                    block : 4,
                    miniBlocks : 1,
                    singleAttTrials : 1,
                    sharedAttTrials : 1,
                    categoryTrials : 1
                },
                {
                    instHTML : '',
                    block : 5,
                    miniBlocks : 1,
                    singleAttTrials : 1,
                    sharedAttTrials : 1,
                    categoryTrials : 1
                }
            ],
        
  }}
  );
  });
