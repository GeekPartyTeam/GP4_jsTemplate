/**
 * Created with IntelliJ IDEA.
 * User: nullD
 * Date: 10.06.13
 * Time: 20:39
 */


var slides = {
    "start" : {
         "url" : "img/start.jpg"
        , "actions" : [
            {"goto" : "1.1", "text" : "Морфеус спрашивает тебя"}
        ]
    }
    , "win" : {
        "url" : "fireworks.swf"
        , "description" : "Салют в Вашу честь"
    }
    , "1.1" : {
        "url" : "img/1_1.jpg"
        , "description" : "не желаете ли пилюлю?"
        , "actions" : [
            {"goto" : "win", "text" : "красную"}
            , {"goto" : "end", "text" : "синию"}
        ]
    }
    , "end" : {
        "url" : "img/gameover.jpg"
        , "description" : "Матрица тебя тебя не забудет, матрица любит тебя!"
    }
};

var start = "start";