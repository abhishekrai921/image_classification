let mobilenet;
let video;
let label = '';
var label_info;

// when model is ready make predictions
function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
	if (error) {
        console.error(error);
    } else {
        label = results[0].className;
        // loop the inference by calling itself
        mobilenet.predict(gotResults);
		//extra information about each object class
        if (label == "acoustic guitar") {
           label_info = "An acoustic guitar is a musical instrument in the guitar family, \n through the air. Originally just called a guitar.";
        }
        else if (label == 'aircraft carrier, carrier, flattop, attack aircraft carrier') {
           label_info = "An aircraft carrier is a warship that serves as a seagoing airbase, \n equipped with a full-length flight deck and facilities for carrying, \n arming, deploying, and recovering aircraft";
		}
		else if (label == 'airliner') {
           label_info = "An airliner is a type of aircraft for transporting passengers and \n air cargo.";
		}
		else if (label == 'airship, dirigible') {
           label_info = "An airship or dirigible balloon is a type of aerostat or \n lighter-than-air aircraft that can navigate through the air under \n its own power. Aerostats gain their lift from a lifting gas that \n is less dense than the surrounding air.";
		}
		else if (label == 'analog clock') {
           label_info = "An analog watch is a watch whose display is not digital but rather \n analog with a traditional clock face.";
		}
		else if (label == 'ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin') {
           label_info = "A waste container is a container for temporarily storing waste, \n and is usually made out of metal or plastic. Some common terms are \n dustbin, garbage can, and trash can.";
		}
		else if (label == 'assault rifle, assault gun') {
           label_info = "An assault rifle is a selective-fire rifle that uses an intermediate \n cartridge and a detachable magazine. Assault rifles were first put \n into mass production and accepted into widespread service during \n World War II.";
		}
		else if (label == 'backpack, back pack, knapsack, packsack, rucksack, haversack') {
           label_info = "A backpack—also called knapsack, rucksack, rucksac, pack, sackpack, \n booksack, bookbag or backsack—is, in its simplest frameless form, \n a cloth sack carried on one's back and secured with two straps that \n go over the shoulders, but it can have an external frame, internal \n frame, and there are bodypacks.";
		}
		else if (label == 'balloon') {
           label_info = "A balloon is a flexible bag that can be \n inflated with a gas, such as helium, hydrogen, nitrous oxide, \n oxygen, air. For special tasks, balloons can be filled with smoke, \n liquid water, granular media (e.g. sand, flour or rice), or light \n sources. Modern day balloons are made from materials such as rubber, \n latex, polychloroprene, or a nylon fabric, and can come in many \n different colors. ";
		}
		else if (label == 'ballpoint, ballpoint pen, ballpen, Biro') {
           label_info = "A ballpoint pen, also known as a biro or ball pen, is a pen that \n dispenses ink (usually in paste form) over a metal ball at its \n point, i.e. over a \"ball point\". The metal commonly used is steel, \n brass, or tungsten carbide.";
		}
		else if (label == 'Band Aid') {
           label_info = "A Band Aid is a small medical dressing used for injuries not \n serious enough to require a full-size bandage.";
		}
		else if (label == 'banjo') {
           label_info = "The banjo is a four, five, or six-stringed instrument with a thin \n membrane stretched over a frame or cavity as a resonator, called \n the head, which is typically circular. The membrane is typically \n made of plastic, although animal skin is still occasionally used.";
		}
		else if (label == 'bannister, banister, balustrade, balusters, handrail') {
           label_info = "A baluster is a vertical moulded shaft, square, or lathe-turned \n form found in stairways, parapets, and other architectural features. \n Common materials used in its construction are wood, stone, and \n less frequently metal and ceramic. A group of balusters supporting \n handrail, coping, or ornamental detail are known as a balustrade.";
		}
		else if (label == 'barbell') {
           label_info = "A barbell is a piece of exercise equipment used in weight training, \n bodybuilding, weightlifting and powerlifting, consisting of a long \n bar, usually with weights attached at each end.";
		}
		else if (label == 'binder, ring-binder') {
           label_info = "Ring binders are large folders that contain file folders or hole \n punched papers. These binders come in various sizes and can \n accommodate an array of paper sizes.";
		}
		else if (label == 'binoculars, field glasses, opera glasses') {
           label_info = "Binoculars or field glasses are two telescopes mounted side-by-side \n and aligned to point in the same direction, allowing the viewer to \n use both eyes (binocular vision) when viewing distant objects. \n Most are sized to be held using both hands, although sizes vary \n widely from opera glasses to large pedestal mounted military models.";
		}
		else if (label == 'bookcase') {
           label_info = "A bookcase, or bookshelf, is a piece of furniture with horizontal \n shelves, often in a cabinet, used to store books or other printed \n materials. Bookcases are used in private homes, public and \n university libraries, offices and bookstores. Bookcases range \n from small, low models the height of a table to high models \n reaching up to ceiling height.";
		}
		else if (label == 'bottlecap') {
           label_info = "A bottle cap or bottle top seals the top opening of a bottle. A \n cap is typically colourfully decorated with the logo of the brand \n of beverage. Plastic caps are used for plastic bottles, while \n metal with plastic backing is used for glass; the metal is usually \n steel.";
		}
		else if (label == 'bow tie, bow-tie, bowtie') {
           label_info = "The bow tie is a type of necktie. A modern bow tie is tied using \n a common shoelace knot, which is also called the bow knot for that \n reason. It consists of a ribbon of fabric tied around the collar \n of a shirt in a symmetrical manner so that the two opposite ends \n form loops.";
		}
		else if (label == 'broom') {
           label_info = "A broom is a cleaning tool consisting of usually stiff fibers \n (often made of materials such as plastic, hair, or corn husks) \n attached to, and roughly parallel to, a cylindrical handle, the \n broomstick. It is thus a variety of brush with a long handle. It \n is commonly used in combination with a dustpan.";
		}
		else if (label == 'bucket, pail') {
           label_info = "A bucket is typically a watertight, vertical cylinder or truncated \n cone or square, with an open top and a flat bottom, attached to a \n semicircular carrying handle called the bail.A bucket is usually \n an open-top container. In contrast, a pail can have a top or lid \n and is a shipping container. In common usage, the two terms are \n often used interchangeably.";
		}
		else if (label == 'buckle') {
           label_info = "The buckle or clasp is a device used for fastening two loose ends, \n with one end attached to it and the other held by a catch in a \n secure but adjustable manner.";
		}
		else if (label == 'candle, taper, wax light') {
           label_info = "A candle is an ignitable wick embedded in wax, or another flammable \n solid substance such as tallow, that provides light, and in some \n cases, a fragrance. A candle can also provide heat, light, or a \n method of keeping time.";
		}
		else if (label == 'cardigan') {
           label_info = "A cardigan is a type of knitted garment that has an open front.";
		}
		else if (label == 'carton') {
           label_info = "A carton is a box or container usually made of paperboard and \n sometimes of corrugated fiberboard. Many types of cartons are used \n in packaging. Sometimes a carton is also called a box.";
		}
		else if (label == 'car wheel') {
           label_info = "Wheels of a car.";
		}
		else if (label == 'cellular telephone, cellular phone, cellphone, cell, mobile phone') {
           label_info = "A mobile phone, cell phone, cellphone, or hand phone, sometimes \n shortened to simply mobile, cell or just phone, is a portable \n telephone that can make and receive calls over a radio frequency \n link while the user is moving within a telephone service area.";
		}
		else if (label == 'chain') {
           label_info = "A chain is a serial assembly of connected pieces, called links, \n typically made of metal, with an overall character similar to that \n of a rope in that it is flexible and curved in compression but \n linear, rigid, and load-bearing in tension. A chain may consist \n of two or more links.";
		}
		else if (label == 'coffee mug') {
           label_info = "A coffee cup is a container that coffee and espresso-based drinks \n are served in. Coffee cups are typically made of glazed ceramic, \n and have a single handle for portability while the beverage is \n hot. ";
		}
		else if (label == 'coffeepot') {
           label_info = "A tall covered pot with a spout, in which coffee is made or served.";
		}
		else if (label == 'computer keyboard, keypad') {
           label_info = "A computer keyboard is a typewriter-style device which uses an \n arrangement of buttons or keys to act as mechanical levers or \n electronic switches.";
		}
		else if (label == 'desk') {
           label_info = "A desk is a piece of furniture with a flat table-style work surface \n used in a school, office, home or the like for academic, \n professional or domestic activities such as reading, writing, or \n using equipment such as a computer.";
		}
		else if (label == 'desktop computer') {
           label_info = "A desktop computer is a personal computer designed for regular use \n at a single location on or near a desk or table due to its size \n and power requirements. ";
		}
		else if (label == 'dial telephone, dial phone') {
           label_info = "A telephone or phone, is a telecommunications device that permits \n two or more users to conduct a conversation when they are too far \n apart to be heard directly.";
		}
		else if (label == 'digital clock') {
           label_info = "A digital clock is a type of clock that displays the time digitally \n (i.e. in numerals or other symbols), as opposed to an analog clock, \n where the time is indicated by the positions of rotating hands.";
		}
		else if (label == 'digital watch') {
           label_info = "A digital watch is a timepiece intended to be carried or worn by \n a person which has a digital display.";
		}
		else if (label == 'doormat, welcome mat') {
           label_info = "A mat is a piece of fabric material that generally is placed on a \n floor or other flat surface.";
		}
		else if (label == 'envelope') {
           label_info = "A flat paper container with a sealable flap, used to enclose a \n letter or document.";
		}
		else if (label == 'file, file cabinet, filing cabinet') {
           label_info = "Filing cabinet (or file cabinet) is a piece of office furniture \n usually used to store paper documents in file folders.";
		}
		else if (label == 'fountain pen') {
           label_info = "A fountain pen is a nib pen that, unlike its predecessor, the dip \n pen, contains an internal reservoir of liquid ink.";
		}
		else if (label == 'handkerchief, hankie, hanky, hankey') {
           label_info = "A handkerchief is a form of a kerchief or bandanna, typically a \n hemmed square of thin fabric or paper which can be carried in the \n pocket or handbag, and which is intended for personal hygiene \n purposes such as wiping one's hands or face, or blowing one's nose.";
		}
		else if (label == 'iPod') {
           label_info = "The iPod is a line of portable media players and multi-purpose \n pocket computers designed and marketed by Apple Inc.";
		}
		else if (label == 'jean, blue jean, denim') {
           label_info = "Jeans are a type of pants or trousers, typically made from denim \n or dungaree cloth.";
		}
		else if (label == 'jersey, T-shirt, tee shirt') {
           label_info = "A T-shirt is a style of fabric shirt named after the T shape of \n its body and sleeves.";
		}
		else if (label == 'laptop, laptop computer') {
           label_info = "A laptop (also laptop computer), is a small, portable personal \n computer (PC) with a \"clamshell\" form factor, typically having a \n thin LCD or LED computer screen mounted on the inside of the upper \n lid of the clamshell and an alphanumeric keyboard on the inside \n of the lower lid.";
		}
		else if (label == 'modem') {
           label_info = "A modem (a portmanteau of modulator-demodulator) is a hardware \n device that converts data into a format suitable for a transmission \n medium so that it can be transmitted from one computer to another \n (historically along telephone wires).";
		}
		else if (label == 'monitor') {
           label_info = "A monitor is an output device that displays information in \n pictorial form.";
		}
		else if (label == 'motor scooter, scooter') {
           label_info = "A scooter or motor scooter is a type of motorcycle with a step- \n through frame and a platform for the rider's feet.";
		}
		else if (label == 'mouse, computer mouse') {
           label_info = "A computer mouse is a hand-held pointing device that detects two- \n dimensional motion relative to a surface. This motion is typically \n translated into the motion of a pointer on a display, which allows \n a smooth control of the graphical user interface.";
		}
		else if (label == 'nail') {
           label_info = "A nail is a horn-like keratinous envelope covering the tips of the \n fingers and toes in most primates.";
		}
		else if (label == 'notebook, notebook computer') {
           label_info = "A notebook computer is a small, portable personal computer (PC) \n with a \"clamshell\" form factor, typically having a thin LCD or \n LED computer screen mounted on the inside of the upper lid of the \n clamshell and an alphanumeric keyboard on the inside  of the lower \n lid.";
		}
		else if (label == 'padlock') {
           label_info = "Padlocks are portable locks with a shackle that may be passed through an opening (such as a chain link, or hasp staple) to prevent use, theft, vandalism or harm.";
		}
		else if (label == 'paper towel') {
           label_info = "Paper towel is absorbent towel made from paper.";
		}
		else if (label == 'photocopier') {
           label_info = "A photocopier is a machine that makes copies of documents and \n other visual images onto paper or plastic film quickly and cheaply.";
		}
		else if (label == 'plastic bag') {
           label_info = "A plastic bag, polybag, or pouch is a type of container made of \n thin, flexible, plastic film, nonwoven fabric, or plastic textile. \n Plastic bags are used for containing and transporting goods such \n as foods, produce, powders, ice, magazines, chemicals, and waste. \n It is a common form of packaging.";
		}
		else if (label == 'printer') {
           label_info = " A printer is an external hardware output device that takes the \n electronic data stored on a computer or other device and generates \n a hard copy of it.";
		}
		else if (label == 'projector') {
           label_info = "A projector is an optical device that projects an image (or moving \n images) onto a surface, commonly a projection screen.";
		}
		else if (label == 'purse') {
           label_info = "A small bag for money.";
		}
		else if (label == 'reflex camera') {
           label_info = "A reflex camera is a camera that permits the photographer to view \n the image that will be seen through the lens, and therefore to \n see exactly what will be captured, contrary to viewfinder cameras \n where the image could be significantly different from what will be \n captured.";
		}
		else if (label == 'remote control, remote') {
           label_info = "A remote control is an electronic device used to operate another \n device from a distance, usually wirelessly.";
		}
		else if (label == 'rubber eraser, rubber, pencil eraser') {
           label_info = "An eraser is an article of stationery that is used for removing \n marks from paper or skin.";
		}
		else if (label == 'running shoe') {
           label_info = "Running shoes are shoes primarily designed for sports or other \n forms of physical exercise, but which are now also widely used \n for everyday wear.";
		}
		else if (label == 'sliding door') {
           label_info = "A sliding door is a type of door which opens horizontally by \n sliding, usually parallel to a wall.";
		}
		else if (label == 'sock') {
           label_info = "A garment for the foot and lower part of the leg, typically \n knitted from wool, cotton, or nylon.";
		}
		else if (label == 'space bar') {
           label_info = "The space bar is a key on a typewriter or alphanumeric keyboard \n in the form of a horizontal bar in the lowermost row, significantly \n wider than other keys. Its main purpose is to conveniently enter \n a space, e.g., between words during typing.";
		}
		else if (label == 'suit, suit of clothes') {
           label_info = "A suit is a set of men's wear comprising a suit jacket and \n trousers. ";
		}
		else if (label == 'sunglass') {
           label_info = "Sunglasses or sun glasses (informally called shades) are a form \n of protective eyewear designed primarily to prevent bright sunlight \n and high-energy visible light from damaging or discomforting the \n eyes.";
		}
		else if (label == 'sunglasses, dark glasses, shades') {
           label_info = "Sunglasses or sun glasses (informally called shades) are a form \n of protective eyewear designed primarily to prevent bright sunlight \n and high-energy visible light from damaging or discomforting the \n eyes.";
		}
		else if (label == 'sweatshirt') {
           label_info = "A loose shirt, usually made of a knit fleece, for athletic wear \n and now often used as casual apparel.";
		}
		else if (label == 'switch, electric switch, electrical switch') {
           label_info = "A switch is an electrical component that can disconnect or connect \n the conducting path in an electrical circuit, interrupting the \n electric current or diverting it from one conductor to another.";
		}
		else if (label == 'water bottle') {
           label_info = "A water bottle is a container that is used to hold water, liquids \n or other beverages for consumption.";
		}
		else if (label == 'window screen') {
           label_info = "A window screen (also known as insect screen, bug screen, fly \n screen, wire mesh) is designed to cover the opening of a window. \n It is usually a mesh made of plastic wire, or other pieces of \n plastic and stretched in a frame of wood or metal.";
		}
		else if (label == 'window shade') {
           label_info = "A window shade is a piece of stiff cloth or heavy paper that \n you can pull down over a window as a covering.";
		}
		else if (label == 'web site, website, internet site, site') {
           label_info = "A website or web site is a collection of related network web \n resources, such as web pages, multimedia content, which are \n typically identified with a common domain name, and published on \n at least one web server.";
		}
		else if (label == 'street sign') {
           label_info = "Traffic signs or road signs are signs erected at the side of or \n above roads to give instructions or provide information to road \n users.";
		}
		else if (label == 'traffic light, traffic signal, stoplight') {
           label_info = "Traffic lights for public transport often use signals that are \n distinct from those for private traffic.";
		}
		else if (label == 'plate') {
           label_info = "A slightly curved but almost flat dish from which food is served \n or eaten.";
		}
		else if (label == 'toilet tissue, toilet paper, bathroom tissue') {
           label_info = "Toilet paper, sometimes called toilet tissue, is a tissue paper \n product primarily used to clean the anus and surrounding area of \n fecal material after defecation and to clean the perineal area of \n urine after urination or other bodily fluid releases.";
		}
		else {
			label_info = "discription is unavailable"
		}
    }
}

const speech = new SpeechSynthesisUtterance();
speech.volume = 1;
speech.rate = 1;
speech.pitch = 0.6;


(function() {
	var f = function(){
//		console.log(label);
		speech.text = label
		speechSynthesis.speak(speech);
	};
	window.setInterval(f, 500);
	f();
})();


// setup function
function setup() {
    createCanvas(640, 720);
    // ml5 to create video capture
    var constraints = {
		audio: false,
		video: {
			facingMode: "environment"
		}
	};
	video = createCapture(constraints);
    video.hide();
    background(100);
    // load the MobileNet and apply it on video feed
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}


function draw() {
    background(38,134,198);
    // show video 
    image(video, 10, 10, 620, 480);
    fill(255);
    textSize(25);
    // show prediction label 
    text(label, 10, height - 200);
    textSize(18);
	text("Info :", 10, height - 170),text(label_info, 65, height - 170);
}

