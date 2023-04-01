var commands = {
    "commands_p": [
        {
            "pattern": ["hie", "hi","hello","ola","yo","sup",'hey'],
            "response_type" : "string",
            "response": "Yo! Hope your doing good, How may I assist you today ? Ask me 'what can you do?' if you want to know what I can do...",
            "must_have": null
        },
        {
            "pattern": ["are"],
            "response_type" : "string",
            "response": "I'm doing better than I'm supposed too, my developers are killing me!! anyway,  if you want to know what I can do...",
            "must_have": ["how","you"]
        }
    ],
    "commands_r": [
        {
            "pattern": ["(.*)what can you do(.*)"],
            "match_tye": "r",
            "response_type": "string",
            "response" : "Ask me  <br/> 1. Suggest a Restaurant<br/> 2. Show Top Rated Restaurants<br/> 3. Suggest Restaurants by [$$] ( $ - Budget Friendly  $$$ - Expensive) <br/> 4. What are restaurants in [zipcode]</br> 5. Show me restaurants that are serving [Category] </br> 6. Search for [Restaurant Name]"
        },
        {
            "pattern": ["the names (.*)"],
            "match_tye": "r",
            "response_type": "calculated",
            "response" : "r_1"
        },
        {
            "pattern": ["(.*)suggest(.*)restaurant(.*)"],
            "match_tye":"r",
            "response_type":"calculated",
            "response" : "q1"
        },
        {
            "pattern": ["(.*)top rated(.*)"],
            "match_tye":"r",
            "response_type":"calculated",
            "response" : "q2"
        },
        {
            "pattern": ["(.*)restaurants by (${1-3})(.*)"],
            "match_tye":"r",
            "response_type":"calculated",
            "response" : "q3"
        },
        {
            "pattern": ["(.*)restaraunts in ([0-9]{5})(.*)"],
            "match_tye":"r",
            "response_type":"calculated",
            "response" : "q4"
        },
        {
            "pattern": ["(.*)serving ([a-z])"],
            "match_tye":"r",
            "response_type":"calculated",
            "response" : "q5"
        },
    ]
}


