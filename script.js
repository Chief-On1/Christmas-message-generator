// Wait until the page is fully loaded
window.addEventListener('load', function () {
  // Hide the loader after the page is fully loaded
  const loader = document.getElementById('loader');
  loader.style.visibility = 'hidden'; // Hide the loader
  loader.style.opacity = '0'; // Fade out the loader
});

document.getElementById('generatorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get and validate name input
    const name = document.getElementById('name').value.trim();
    if (name === '' || name.length < 5) {
        Swal.fire({
  text: "Name cannot be empty or less than 5 characters!",
  icon: "warning"
});
        return;
    }

    // Get and validate date of birth input
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    if (!dobInput || isNaN(dob)) {
        Swal.fire({
         icon: "warning", 
         text: "Invalid Date of Birth. Please select a valid date.",
         showConfirmButton: true
        });
        return;
    }

    const age = new Date().getFullYear() - dob.getFullYear();
    const newAge = age + 1;
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    if (age < 2) {
        Swal.fire({
  text: "Sorry, you must be at least 2 years old to submit the form.",
  icon: "error"
});
        return;
    }


    // Array of Christmas wishes
    const wishes = [
    `🎄 Merry Christmas, <b>${name}</b>! 🎉 You’re <b>${age}</b> years old and glowing with the joy of the season! 🌟 As we're moving from <b>${currentYear}</b> to <b>${nextYear}</b>, may the Lord richly bless you and your family. May your heart be filled with love, your days with peace, and your year ahead with endless blessings. Here's to a wonderful <b>${newAge}</b>, filled with laughter, adventures, and unforgettable memories. Let the Christmas spirit guide you to new heights of happiness and prosperity. 🥰✨`,
    
    `🌟🎅 Hello <b>${name}</b>, at <b>${age}</b> years, you're shining brighter than Christmas lights! 🌟 May your new year ahead be full of joy, blessings, and cherished moments. This festive season, take time to reflect on the love and gratitude that fills your life. May your heart find peace and your dreams come true. I wish for you a year ahead where everything you hope for becomes a reality. Stay joyful, embrace the magic, and spread your love to everyone around you. 🎁❄️`,
    
    `🎄 Merry Christmas, <b>${name}</b>! 🎉 At <b>${age}</b> years old, you're more radiant than the twinkling lights! Wishing you joy, peace, and love this festive season. May you experience the true magic of Christmas and embrace the coming year with a heart full of hope. Celebrate every beautiful moment with your loved ones, and know that you're surrounded by love. As the new year begins, may it bring you all the happiness and success you've been dreaming of. ✨`,
    
    `🎄✨ Merry Christmas, <b>${name}</b>! This festive season, may your heart overflow with love and happiness. As you step into <b>${newAge}</b>, may all your dreams come true! May this time of year be filled with special moments, joy, and the warmth of those around you. Take time to cherish the little things and embrace the peace that Christmas brings. Here’s to a bright and fulfilling new year, where your hopes take flight and your blessings multiply. 🎉`,
    
    `🎅 Ho Ho Ho, <b>${name}</b>! At <b>${age}</b>, you’re already spreading Christmas cheer like never before! May your heart be as full as the Christmas spirit! This time of year is a reminder to be thankful for the love we share, and I’m thankful for you. May your Christmas be merry and bright, filled with unforgettable memories. As the year draws to a close, may you find peace in your heart, and excitement for the adventures to come in the year ahead. 🎁🎄`,
    
    `🎄 Merry Christmas, <b>${name}</b>! May your <b>${newAge}</b>th year be filled with blessings, love, and happiness. You deserve all the magic this season brings! This holiday season, may you find joy in every little thing, cherish every moment with your loved ones, and look forward to all the beautiful days that await you. May the peace of Christmas remain in your heart throughout the year, and may you be surrounded by the love and laughter of family and friends. ❄️✨`,
    
    `🌟🎉 Merry Christmas, <b>${name}</b>! At <b>${age}</b>, you're just beginning to shine like the star atop the Christmas tree. Here's to a year of laughter, joy, and dreams fulfilled! May this Christmas bring you peace, and may the New Year bring you closer to your deepest desires. Wishing you a festive season full of magic, love, and beautiful moments. Let the season be a reminder of how much you're loved, and may your year ahead overflow with blessings and joy. ✨🎁`,
    
    `🎄🌟 Wishing you the happiest of holidays, <b>${name}</b>! As you step into <b>${newAge}</b>, may you be surrounded by warmth, happiness, and the love of your family and friends. Let this season fill your heart with joy and bring moments that will last a lifetime. Cherish each second with those who matter most, and know that every memory created is a gift. Here's to a bright future filled with love, hope, and new adventures in the coming year. 🎅❤️`,
    
    `🎅❄️ Ho Ho Ho, <b>${name}</b>! At <b>${age}</b>, you're a star in the making. May the joy of Christmas carry you into a fantastic <b>${newAge}</b>. Enjoy every magical moment with those you hold dear. May this festive season bring you laughter, and may the New Year be filled with success, happiness, and endless possibilities! As you ring in the new year, may you be surrounded by those who lift you up and support you in every way. Let your light shine brightly this Christmas! 🎁✨`,
    
    `🎄❄️ Merry Christmas, <b>${name}</b>! As you celebrate your <b>${age}</b> years of life, may this festive season bring you unforgettable moments of joy, peace, and love. May the warmth of family and the beauty of the season fill your heart with happiness. Here's to a Christmas that's magical and a New Year that's even brighter. Embrace every opportunity that comes your way, and let the joy of the season inspire you to make this coming year your best yet! 🌟🎉`,
    
    `🎄🎁 Merry Christmas, <b>${name}</b>! You’ve made it through <b>${age}</b> years of awesomeness! Now it’s time to enjoy the magic of the season. Here’s to a bright, blessed new year filled with laughter, health, and happiness. As you embrace the spirit of the holidays, may every day ahead be filled with love and adventure. The magic of Christmas is in the air, and it’s your time to shine. I wish you a year ahead filled with prosperity, growth, and cherished moments. 🌟✨`,
    
    `🎄✨ Merry Christmas, <b>${name}</b>! As you enter <b>${newAge}</b>, may your heart be full of joy, and your days be filled with laughter. Here's to another fantastic year ahead! Let this holiday season remind you of the beauty of life, the love of friends and family, and the peace that comes with the new year. May you always find light in the darkest of days, and may your journey be filled with abundant love and happiness. 🎅🎉`,
    
    `🌟🎅 Merry Christmas, <b>${name}</b>! At <b>${age}</b> years old, you’re creating memories to last a lifetime. May your holidays be filled with warmth, love, and plenty of fun! May this season of joy bring you everything you need and more. As you celebrate with family and friends, may your heart be as light as the snowflakes! Embrace the spirit of Christmas, and let this festive time be the beginning of a year full of incredible experiences and blessings. 🎁❄️`,
    
    `🎄🎉 Merry Christmas, <b>${name}</b>! At <b>${age}</b>, you’re only getting more amazing with every passing year. Wishing you all the happiness and blessings this Christmas season brings! May your Christmas be full of delightful moments, and your year ahead be filled with new opportunities, love, and wonderful adventures. Stay blessed, today and always! May you always find joy in the simplest moments and peace in your heart throughout the year. ✨🌟`,
    
    `🎄🌟 Merry Christmas, <b>${name}</b>! May this season bring you joy, laughter, and cherished memories. As you celebrate turning <b>${newAge}</b> soon, may the blessings multiply! May this time of year bring you peace and contentment, and may the love of those around you fill your heart. Here's to an amazing new year ahead, filled with opportunities, success, and love. Let this season be a reminder of all the good things that life has to offer. 🎅❤️`,
    
    `🎄✨ May the magic of Christmas fill your heart with peace, your home with love, and your life with joy. Merry Christmas, <b>${name}</b>, and a bright New Year ahead! As the year comes to a close, may you look back with gratitude and ahead with excitement for all the good things to come. Let this holiday season be a reminder of how special you are, and may your new year be full of exciting opportunities and endless possibilities. 🎅❤️`
];

    // Randomly select a wish
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    
    // Show Swal Loader
    Swal.fire({
        title: "Please wait...",
        html: "Generating your Christmas message...",
        timer: 3500,
        timerProgressBar: true,
        didOpen: () => Swal.showLoading()
    }).then(() => {
        document.getElementById('message').innerHTML = randomWish;
        document.getElementById('output').classList.remove('hidden');
        document.getElementById('entered-name').innerText = name || 'N/A';
        document.getElementById('entered-dob').innerText = dobInput || 'N/A';
        document.getElementById('drop').innerText = `${name} 🎁`;
    });

    // Add style to the output section
    document.getElementById('output').style.marginTop = '20px';
    document.getElementById('output').style.borderTop = '1px solid';

    // Generate share URL
    const sharingUrl = `${window.location.origin}${window.location.pathname}?ivn=${encodeURIComponent(name)}`;
    document.getElementById('share-url').textContent = sharingUrl;
    document.getElementById('share-url').href = sharingUrl;

    // Reset form
    document.getElementById('generatorForm').reset();
});

// Copy to Clipboard
const copyToClipboard = (btnId, contentId, notificationId) => {
    document.getElementById(btnId).addEventListener('click', function () {
        const content = document.getElementById(contentId).textContent;
        if (content) {
            navigator.clipboard.writeText(content).then(() => {
                const notification = document.getElementById(notificationId);
                notification.style.visibility = 'visible';
                notification.style.animation = 'showText 1s 1';
                setTimeout(() => (notification.style.visibility = 'hidden'), 2500);
            }).catch(() => alert('Failed to copy. Please try again.'));        
        }
    });
};

copyToClipboard('copy-btn-1', 'message', 'copied-1');
copyToClipboard('copy-btn-2', 'share-url', 'copied-2');

document.getElementById('year').innerText = new Date().getFullYear();

// Sharing Functionality
document.getElementById('share').addEventListener('click', function () {
    const shortMessage = "Hey, I just got my beautiful Christmas message 🤩. Check it out here:";
    const sharingUrl = document.getElementById('share-url').textContent;
    const fullMessage = `${shortMessage} ${sharingUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullMessage)}`;

    if (navigator.share) {
        navigator.share({
            title: "Santa Claus Christmas Wish 🎄",
            text: fullMessage,
            url: sharingUrl
        }).catch(console.error);
    } else {
        window.open(whatsappUrl, '_blank');
    }
});

// Display inviter's name on page load
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const inviterName = params.get('ivn') || "Santa";

    // Update inviter's name in all relevant elements
    document.querySelectorAll('#inviter-name, #head span').forEach(element => {
        element.textContent = inviterName;
    });
});


// Dynamic Lights
const colors = ['red', 'green', 'gold', 'blue', 'white'];
const numLights = 15;
const container = document.getElementById('pass-name');

for (let i = 0; i < numLights; i++) {
    const light = document.createElement('div');
    light.classList.add('lighting');
    container.appendChild(light);

    const size = Math.random() * 20 + 10;
    light.style.width = size + 'px';
    light.style.height = size + 'px';
    light.style.top = `calc(${Math.random() * 80}%)`; // Prevent overlap with text
    light.style.left = `${Math.random() * 100}%`;

    const color = colors[Math.floor(Math.random() * colors.length)];
    light.style.backgroundColor = color;
    light.style.boxShadow = `0 0 30px ${color}`;
    light.style.animationDuration = `${Math.random() * 2 + 1}s`;
}