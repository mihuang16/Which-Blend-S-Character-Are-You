// Hidden
$(".img").hide();

// Submit
$(".submit").click(function() {
    var social = $(".social").val();
    var age = $(".age").val();
    console.log(social);
    console.log(age);
    // Conditional Statements
    if (social === "Lonely" && age <= 18){
        $(".submit").hide();
        $("input").hide();
        $(".title").hide();
        $(".titleimg").hide();
        $(".quiz").hide();
        $(".maika").show();
        $(".name").text("Maika");
        $(".explanation").text("You are Maika. She is a high school girl who dreams of studying abroad and is saving up money to pay for it though her family could pay for it. Her eyes make her facial expression really sadistic when she smiles which leaves her lonely. She plays the sadistic role at the cafe.");
    }else if (social === "Lonely" && age >= 18){    
        $(".submit").hide();
        $("input").hide();
        $(".quiz").hide();
        $(".title").hide();
        $(".titleimg").hide();
        $(".mafuyu").show();
        $(".name").text("Mafuyu");
        $(".explanation").text("You are Mafuyu. Despite her height and looks, she is a college student. She refuses to get a boyfriend because she wants to watch kid's anime. She plays the little sister role at the cafe but is the complete opposite when not working.");
        $("body").css("background-color" , "#ffe69e");
    }else if (social === "Social" && age <= 18){    
        $(".submit").hide();
        $("input").hide();
        $(".quiz").hide();
        $(".title").hide();
        $(".titleimg").hide();
        $(".kaho").show();
        $(".name").text("Kaho");
        $(".explanation").text("You are Kaho. She is a cheerful girl and loves to play video games. She likes going to the arcade after work and is great at every game. She plays the tsundere role at the cafe.");
        $("body").css("background-color" , "#9eddff");
    }else if (social === "Social" && age >= 18){    
        $(".submit").hide();
        $("input").hide();
        $(".quiz").hide();
        $(".title").hide();
        $(".titleimg").hide();
        $(".hideri").show();
        $(".name").text("Hideri");
        $(".explanation").text("You are Hideri. Despite his looks, he is a guy. He wants to become an idol. He plays the idol role at the cafe.");
        $("body").css("background-color" , "#9effd0");
    }else{
        $(".explanation").text("Please try again.");
    }
});