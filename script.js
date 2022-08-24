const imgs = [
    'https://stockimages.org/wp-content/uploads/2020/10/bigstock-Photography-Concept-African-A-381364544.jpg',
    'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/03/transform_existing_images_with_adobe_stock_lead.jpg',
    'https://static01.nyt.com/images/2011/01/14/arts/14MOVING-span/MOVING-jumbo.jpg'
]

const displayed_image = document.getElementById('target_image');
const displayed_counter  = document.getElementById('img_counter');
var index = 0;

window.onload = () => {
    displayed_image.src = imgs[index];
    displayed_counter.innerText = `${index+1} / ${imgs.length}`;
}

function changeImg(n) {
    index += n;

    if (index >= imgs.length) index = 0;
    else if (index < 0) index = imgs.length - 1;

    displayed_image.src = imgs[index];
    displayed_image.alt = `Image ${index+1}`;

    displayed_counter.innerText = `${index+1} / ${imgs.length}`;
}
