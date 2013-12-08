function getMonth() {
    var curdate = new Date();
    var month = curdate.getMonth() + 1;
    return month;
}

function getDay() {
    var curdate = new Date();
    var day = curdate.getDate() + 1;
    return day;
}

function checkDate(dateNeeded) {
    var currentMonth = getMonth();
    var currentDay = getDay();
    var responseStr = " ";
    if (currentMonth == 12) {
        if (currentDay >= 1) {
            responseStr = stringInfo(dateNeeded);
        }
        else {
            responseStr = "It's December, but you'll have to wait a little longer for this date.";
        }
    }
    else {
        responseStr = "Hey, it's not even December yet!";
    }

    document.getElementById("response").innerHTML = responseStr;
}

function stringInfo(dayToDisplay)
{
	switch (dayToDisplay)
	{
		case 1:
		  retString = "<h1>Advent Calendar <br />Craft Guides:</h1> <br><br> <i>To go back, click the 3 dots in the bottom<br /> right corner and then press back.</i><br><br> <b>Craft Crow</b><br> <a href=\"http://www.thecraftycrow.net/2012/11/35-great-homemade-advent-calendar-ideas.html\" target=_blank><img src=\"http://belladia.typepad.com/.a/6a00d8341cc08553ef017d3e1125e5970c-800wi\" alt=\"Crafty Crow\" width=\"275\" height=\"336\"></a> <br><br> <b>AllCrafts</b><br> <a href=\"http://www.allcrafts.net/xmas/advent-calendars.htm\" target=_blank><img src=\"http://www.marthastewart.com/sites/files/marthastewart.com/images/content/pub/kids/2001Q4/ka98981_hol01_advent_xl.jpg\" alt=\"AllCrafts\" width=\"275\" height=\"344\"></a> <br><br> <b>All About You</b><br> <a href=\"http://www.allaboutyou.com/craft/Christmas-craft-ideas-advent-calendars\" target=_blank><img src=\"http://www.allaboutyou.com/cm/allaboutyou/images/sf/HB-blackboard-advent-calendar-s8LgHW-300x400.jpg\" alt=\"All About You\" width=\"275\" height=\"367\"></a> <br><br> <b>Apartment Therapy</b><br> <a href=\"http://www.apartmenttherapy.com/countdown-to-christmas-35-diy-advent-calendars-to-make-roundup-197137\" target=_blank><img src=\"http://p-ec1.pixstatic.com/52823800697ab00e10005c98._w.540_s.fit_.jpg\" alt=\"Apartment Therapy\" width=\"275\" height=\"376\"></a> <br><br> <b>BlogHer</b><br> <a href=\"http://www.blogher.com/10-advent-calendar-crafts-you-can-make?page=full\" target=_blank><img src=\"https://www.blogher.com/files/outdoor-advent.jpg\" alt=\"BlogHer\" width=\"275\" height=\"170\"></a>";
		  break;
		case 2:
		  retString = "<h1>Ginger Bread <br />House Guides:</h1> <br><br> <i>To go back, click the 3 dots in the bottom<br /> right corner and then press back.</i><br><br> <b>Food Network</b><br> <a href=\"http://www.foodnetwork.com/recipes/gingerbread-house-recipe/index.html\" target=_blank><img src=\"http://img.foodnetwork.com/FOOD/2012/10/16/FN_Gingerbread-House-Process-05-Recipe-Shot_s4x3_lg.jpg\" alt=\"Food Network\" width=\"275\" height=\"206\"></a> <br><br> <b>Simply Recipes</b><br> <a href=\"http://www.simplyrecipes.com/recipes/how_to_make_a_gingerbread_house/\" target=_blank><img src=\"http://www.simplyrecipes.com/photos/gingerbread-house-2.jpg\" alt=\"Simply Recipes\" width=\"275\" height=\"183\"></a> <br><br> <b>King Arthur Flour</b><br> <a href=\"http://www.kingarthurflour.com/baking/documents/gingerbread.pdf\" target=_blank><img src=\"http://search.kingarthurflour.com/thumb.php?s=220&f=http://www.kingarthurflour.com/item-img/3921_09_04_2013__15_32_31_214\" alt=\"King Arthur Flour\" width=\"275\" height=\"275\"></a>";
		  break;
		case 3:
		  retString = "<h1>Ornament Origami:</h1> <br><br> <i>To go back, click the 3 dots in the bottom<br /> right corner and then press back.</i><br><br> <b>Origami Club</b><br> <a href=\"http://en.origami-club.com/xmas/\" target=_blank><img src=\"http://en.origami-club.com/flowers/poinsettia/poinsettia.jpg\" alt=\"Origami Club\" width=\"275\" height=\"247\"></a> <br><br> <b>Origami-Fun</b><br> <a href=\"http://www.origami-fun.com/christmas-origami.html\" target=_blank><img src=\"http://www.origami-fun.com/images/xmas-trees.gif\" alt=\"Origami-Fun\" width=\"275\" height=\"275\"></a> <br><br> <b>Origami Resource Center</b><br> <a href=\"http://www.origami-resource-center.com/christmas-ornaments.html\" target=_blank><img src=\"http://www.origami-resource-center.com/images/christmasOrnament3in1RabbitEar.jpg\" alt=\"Origami Resource Center\" width=\"275\" height=\"275\"></a> <br><br> <b>HGTV</b><br> <a href=\"http://www.hgtv.com/handmade/make-an-origami-christmas-ornament/index.html\" target=_blank><img src=\"http://hgtv.sndimg.com/HGTV/2012/11/18/Original_Manvi-Hidalgo-butterfly-ornaments-beauty_s3x4_lg.jpg\" alt=\"HGTV\" width=\"275\" height=\"367\"></a> <br><br> <b>How About Orange</b><br> <a href=\"http://howaboutorange.blogspot.com/2007/12/paper-3-d-holiday-ornament-tutorials.html\" target=_blank><img src=\"http://2.bp.blogspot.com/_wXG-O0Gal_o/R2FV77SnA2I/AAAAAAAABG8/oiaaFa-l0Gc/s400/3D-paper-snowflakes.jpg\" alt=\"How About Orange\" width=\"275\" height=\"151\"></a>";
		  break;
		case 4:
		  retString = "<h1>Create a <br />Wreath:</h1> <br><br> <i>To go back, click the 3 dots in the bottom<br /> right corner and then press back.</i><br><br> <b>All About You</b><br> <a href=\"http://www.allaboutyou.com/craft/Christmas-crafts-Christmas-wreaths\" target=_blank><img src=\"http://www.allaboutyou.com/cm/allaboutyou/images/ac/md_99f0fe3812593255991513.jpg\" alt=\"All About You\" width=\"275\" height=\"330\"></a> <br><br> <b>The 36th Avenue</b><br> <a href=\"http://www.the36thavenue.com/2011/11/sunday-best-25-christmas-wreath.html\" target=_blank><img src=\"http://www.the36thavenue.com/wp-content/uploads/2011/11/Christmas-Wreath-4.jpg\" alt=\"Origami Club\" width=\"275\" height=\"305\"></a> <br><br> <b>Spoonful</b><br> <a href=\"http://spoonful.com/crafts/recycled-wreathl\" target=_blank><img src=\"http://static.spoonful.com/sites/default/files/styles/square_420x420/public/crafts/recycled-wreath-holiday-craft-photo-420-FF1108BABYA05.jpg?itok=redMiFSm\" alt=\"Spoonful\" width=\"275\" height=\"275\"></a> <br><br> <b>By Stephanie Lynn</b><br> <a href=\"http://www.bystephanielynn.com/2011/11/70-unique-and-unusual-christmas-holiday-wreaths-saturday-inspiration-ideas.html\" target=_blank><img src=\"http://i693.photobucket.com/albums/vv298/theliebertfamily/blog3/a45086c4.jpg\" alt=\"By Stephanie Lynn\" width=\"275\" height=\"206\"></a> <br><br> <b>Save On Crafts</b><br> <a href=\"http://www.save-on-crafts.com/wreatmakandd.html\" target=_blank><img src=\"http://bevfabriccrafts.us-dc1-edit.store.yahoo.net/I/bevfabriccrafts_2087_9769871\" alt=\"Save On Crafts\" width=\"275\" height=\"317\"></a>";
		  break;
		case 5:
		  retString = "<h1>Handmade <br />Gift Tags:</h1> <br><br> <i>To go back, click the 3 dots in the bottom<br /> right corner and then press back.</i><br><br> <b>The Crafty Quilter</b><br> <a href=\"http://thecraftyquilter.com/2013/09/christmas-once-a-month-handmade-gift-tags-more/\" target=_blank><img src=\"http://thecraftyquilter.com/wp-content/uploads/2013/09/tags-straight.jpg\" alt=\"The Crafty Quilter\" width=\"275\" height=\"262\"></a> <br><br> <b>Home Depot</b><br> <a href=\"http://ext.homedepot.com/community/blog/christmas-craft-ideas-ceramic-tile-gift-tag/\" target=_blank><img src=\"http://ext.homedepot.com/community/blog/wp-content/wpuploads/DM_Holiday_Tile_Gift_hero.jpg\" alt=\"Home Depot\" width=\"275\" height=\"220\"></a> <br><br> <b>HGTV</b><br> <a href=\"http://www.hgtv.com/handmade/8-handmade-gift-tag-ideas/pictures/index.html\" target=_blank><img src=\"http://img.hgtv.com/HGTV/2010/09/07/RX-DK-AGX19402_fabric-star-tag_s3x4_lg.jpg\" alt=\"HGTV\" width=\"275\" height=\"367\"></a> <br><br> <b>Better Homes and Gardens</b><br> <a href=\"http://www.bhg.com/christmas/cards/easy-handmade-christmas-gift-tags/\" target=_blank><img src=\"http://images.meredith.com/content/dam/bhg/Images/2008/08/101269459.jpg.rendition.largest.jpg\" alt=\"Better Homes and Gardens\" width=\"275\" height=\"367\"></a> <br><br> <b>Buzzfeed</b><br> <a href=\"http://www.buzzfeed.com/peggy/51-seriously-adorable-gift-tag-ideas\" target=_blank><img src=\"http://s3-ec.buzzfed.com/static/enhanced/webdr03/2012/12/12/12/enhanced-buzz-3418-1355333084-11.jpg\" alt=\"Buzzfeed\" width=\"275\" height=\"362\"></a>";
		  break;
		case 6:
		  retString = "<h1>Christmas Lights:</h1> <br><br> <i>To go back, click the 3 dots in the bottom<br /> right corner and then press back.</i><br><br> <b>DIY Network: Buyers' Guide for Outdoor Christmas Lighting</b><br> <a href=\"http://www.diynetwork.com/outdoors/buyers-guide-for-outdoor-christmas-lighting-2/index.html\" target=_blank><img src=\"http://img.diynetwork.com/DIY/2011/09/22/iStock-14448247_colorful-neon-christmas-light-front-yard_s4x3_al.jpg\" alt=\"DIY Network\" width=\"275\" height=\"207\"></a> <br><br> <b>Houston Christmas Lights: How to Hang Christmas Lights</b><br> <a href=\"http://www.lovechristmaslights.com/home/how-to-hang-christmas-lights\" target=_blank><img src=\"http://www.lovechristmaslights.com/images/how_to/small-home.jpg\" alt=\"Houston Christmas Lights\" width=\"275\" height=\"183\"></a> <br><br> <b>iVillage</b><br> <a href=\"http://www.ivillage.com/ways-decorate-home-christmas-lights/7-b-509316\" target=_blank><img src=\"http://www.ivstatic.com/files/et/imagecache/636/files/slides/Sarah_Finks.jpg\" alt=\"iVillage\" width=\"275\" height=\"206\"></a> <br><br> <b>Examiner</b><br> <a href=\"http://www.examiner.com/slideshow/50-bedrooms-decorated-with-christmas-lights#slide=1\" target=_blank><img src=\"http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/97/d6/Apartment%20Therapy-4.jpg?itok=IXT9EN5Q\" alt=\"Examiner\" width=\"275\" height=\"184\"></a>";
		  break;
	} 
    return retString;
}
