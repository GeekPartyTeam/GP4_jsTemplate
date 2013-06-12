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
        , "description" : "Матрица дает салют в Вашу честь!"
    }
    , "1.1" : {
        "url" : "img/1_1.jpg"
        , "description" : "Какую пилюлю будете кушать?"
        , "actions" : [
            {"goto" : "win", "text" : "Красную"}
            , {"goto" : "end", "text" : "Синию"}
        ]
    }
    , "end" : {
        "url" : "img/gameover.jpg"
        , "description" : "Матрица тебя тебя не забудет, матрица любит тебя!"
    }
};

var start = "start";