// চ্যালেঞ্জ নাম্বার টু 

// একটা ডিসকাউন্ট ক্যালকুলেটর এর প্রাকটিস দিয়েছি। সেটা করো। যেখানে একটা প্রাইস লেখা থাকবে এবং একটা বাটন আছে। সেটাতে ক্লিক করলে প্রাইস ৩০% কমে যাবে। এইটার আরেকটু এডভান্সড ভার্সন হবে। তুমি যে Apply বাটনে ক্লিক করবে তখন যদি পাশের টেক্সট বক্স এ DISC30 লেখা থাকে তাহলে ডিসকাউন্ট কাজ করবে। প্রাইস ৩০% কমবে। আর যদি DISC30 না লিখে অন্য কিছু লিখে। যেমন ধরো DOM30 বা DISCOUNT30 বা অন্য কিছু। তাহলে ডিসকাউন্ট কাজ হবে না। 

document.getElementById('button').addEventListener('click', function () {
    const allCostString = document.getElementById('all-cost').innerText;
    const allCost = parseFloat(allCostString);

    const discount = allCost * 0.3;
    const totalAfterDiscount = allCost - discount;

    const netTotal = document.getElementById('net-total');
    netTotal.innerText = totalAfterDiscount;
});

// ----------------------------------------------------------------------------

document.getElementById('btn-total').addEventListener('click', function () {
    const costString = document.getElementById('cost').innerText;
    const cost = parseFloat(costString);

    const input = document.getElementById('input-discount');
    const inputDiscount = input.value;
    input.value = '';

    if (inputDiscount === 'DISC30') {
        const discount = cost * 0.3;
        const totalCostAfterDiscount = cost - discount;
        const total = document.getElementById('total');
        total.innerText = totalCostAfterDiscount;
    }
    else {
        alert('Please input valid coupon code for 30% discount !');
    };
});

// চ্যালেঞ্জ নাম্বার থ্রি  

// Text Editor টাইপের একটা লে-আউট বানাবে। সেখানে একটা Textarea থাকবে। সাথে বেশ কিছু বাটন থাকবে। এদের মধ্যে কোনো একটি বাটনে ক্লিক করলে textarea এর ভিতরের লিখা গুলোর স্টাইল বোল্ড হয়ে যাবে। ঠিক একইভাবে অন্যবাটন গুলো ব্যাবহার করে দেখো ইটালিক, আন্ডারলাইন, লেফট অ্যালাইন, রাইট অ্যালাইন, সেন্টার অ্যালাইন করতে পারো কিনা। এছাড়া একটা নম্বর টাইপের ইনপুট ফিল্ডে ফন্ট সাইজ ইনপুট নিবে। এরপর সে ভ্যালু ব্যাবহার করে টেক্সটের সাইজ পরিবর্তন করবে। আরেকটা নতুন জিনিস ট্রাই করতে পারো। টেক্সট গুলোর কালার পরিবর্তন করার চেষ্টা করে দেখতে পারো। এরজন্য ইনপুট এর type=”color” সম্পর্কে একটু জানতে হবে। 

document.getElementById('bold').addEventListener('click', function () {
    const textarea = document.getElementById('textarea');
    textarea.style.fontWeight = 'bold';
});
document.getElementById('italic').addEventListener('click', function () {
    const textarea = document.getElementById('textarea');
    textarea.style.fontStyle = 'italic';
});
document.getElementById('underline').addEventListener('click', function () {
    const textarea = document.getElementById('textarea');
    textarea.style.textDecoration = 'underline';
});


document.getElementById('left').addEventListener('click', function () {
    const textarea = document.getElementById('textarea');
    textarea.style.textAlign = 'left';
});
document.getElementById('center').addEventListener('click', function () {
    const textarea = document.getElementById('textarea');
    textarea.style.textAlign = 'center';
});
document.getElementById('right').addEventListener('click', function () {
    const textarea = document.getElementById('textarea');
    textarea.style.textAlign = 'right';
});

document.getElementById('input-font-size').addEventListener('click', function () {
    const fontSize = document.getElementById('input-font-size').value;
    const textarea = document.getElementById('textarea');
    textarea.style.fontSize = fontSize + 'px';
});
document.getElementById('color').addEventListener('click', function () {
    const inputColor = document.getElementById('color').value;
    const textarea = document.getElementById('textarea');
    textarea.style.color = inputColor;
});
document.getElementById('btn-uppercase').addEventListener('click', function () {
    const textarea = document.getElementById('textarea');
    textarea.style.textTransform = 'uppercase';
});

