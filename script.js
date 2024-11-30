const images = [
  { 
    src: [
      '/jdm/gtr r34/images (13).jpeg',
      '/jdm/gtr r34/images (14).jpeg',
      '/jdm/gtr r34/images (15).jpeg',
      '/jdm/gtr r34/images (16).jpeg'
    ],
    caption: 'Classic Skyline GT-R R34, The Nissan Skyline GT-R R34 is one of the most iconic Japanese sports cars, especially in the realm of car enthusiasts and fans of the JDM (Japanese Domestic Market) scene. It is the successor to the legendary Skyline GT-R R32 and the R33, and it was produced from 1999 to 2002.' 
  },
  { 
    src: [
      '/jdm/NSX/images (8).jpeg',
      '/jdm/NSX/images (10).jpeg',
      '/jdm/NSX/images (11).jpeg',
      '/jdm/NSX/images (12).jpeg'
    ],
    caption: 'HONDA NSX, The Honda NSX is another legendary vehicle in the world of JDM (Japanese Domestic Market) cars, often hailed as one of Japan\'s most iconic sports cars. First introduced in 1990, the NSX (short for Nippon Sports eXperimental) was designed to compete with European sports cars like the Porsche 911 and Ferrari 348 but with the reliability and precision that Honda is known for.' 
  },
  { 
    src: [
      '/jdm/honda s2000/images (42).jpeg',
      '/jdm/honda s2000/images (43).jpeg',
      '/jdm/honda s2000/images (44).jpeg',
      '/jdm/honda s2000/images (45).jpeg'
    ],
    caption: 'Honda S2000, The Honda S2000 is one of the most revered sports cars in the JDM (Japanese Domestic Market) world. Produced from 1999 to 2009, it was a high-performance roadster that combined Honda\'s legendary engineering with a sleek design and a high-revving engine. Here’s a bit more information about the car:' 
  },
  { 
    src: [
      '/jdm/mazda rx7/images (46).jpeg',
      '/jdm/mazda rx7/images (47).jpeg',
      '/jdm/mazda rx7/images (48).jpeg',
      '/jdm/mazda rx7/images (49).jpeg'
    ],
    caption: 'Mazda RX-7, The Mazda RX-7 is another iconic car in the JDM (Japanese Domestic Market) scene, beloved by car enthusiasts worldwide for its lightweight, balanced chassis, and the use of the unique rotary engine. The RX-7, produced from 1978 to 2002, has a rich history and different versions that were sold in various markets, with the JDM version offering certain features and specifications that made it distinct from those sold in North America and Europe.' 
  },
  { 
    src: [
      '/jdm/subaro brz/images (25).jpeg',
      '/jdm/subaro brz/images (27).jpeg',
      '/jdm/subaro brz/images (28).jpeg',
      '/jdm/subaro brz/images (29).jpeg'
    ],
    caption: 'SUBARO BRZ, The Subaru BRZ is a highly regarded sports car in the JDM (Japanese Domestic Market) and worldwide. It is a joint project between Subaru and Toyota, sharing a platform with the Toyota 86 (previously known as the Scion FR-S in North America). The BRZ is known for its lightweight, rear-wheel-drive configuration, and excellent handling characteristics, making it a favorite among driving enthusiasts.' 
  },
  { 
    src: [
      '/jdm/honda integra/images (50).jpeg',
      '/jdm/honda integra/images (51).jpeg',
      '/jdm/honda integra/images (52).jpeg',
      '/jdm/honda integra/images (53).jpeg'
    ],
    caption: 'HONDA INTEGRA TYPE-R, The JDM Honda Integra Type R is one of the most iconic and celebrated cars in the Japanese Domestic Market (JDM) scene, renowned for its performance, handling, and driving purity. The Integra Type R (often referred to as the DC2 for the first generation of the ITR, produced from 1995 to 2001) has earned legendary status among car enthusiasts worldwide, especially in motorsport, street racing, and tuning communities.' 
  },
  { 
    src: [
      '/jdm/gtr r35/images (20).jpeg',
      '/jdm/gtr r35/images (21).jpeg',
      '/jdm/gtr r35/images (22).jpeg',
      '/jdm/gtr r35/images (23).jpeg'
    ],
    caption: 'NISSAN GT-R R35, The JDM Nissan GT-R R35, like all of the GT-R models, holds a special place in the world of Japanese Domestic Market (JDM) enthusiasts. The R35 is a true supercar killer, offering mind-blowing performance, a high-tech drivetrain, and advanced electronics that make it one of the most capable cars on the market. Here\'s a deeper look at the R35 GT-R and why it\'s such a standout in the JDM scene.' 
  },
  { 
    src: [
      '/jdm/Honda CIVIC TYPE R/images (34).jpeg',
      '/jdm/Honda CIVIC TYPE R/images (35).jpeg',
      '/jdm/Honda CIVIC TYPE R/images (36).jpeg',
      '/jdm/Honda CIVIC TYPE R/images (37).jpeg'
    ],
    caption: 'HONDA CIVIC TYPE-R, The Honda Civic Type R is a cornerstone of the JDM (Japanese Domestic Market) performance car scene, revered for its sharp handling, rev-happy engines, and iconic styling. As one of the most popular hot hatches worldwide, the Honda Civic Type R has built a loyal following thanks to its excellent driving dynamics, motorsport heritage, and tuning potential.' 
  },
  { 
    src: [
      '/jdm/supra mk4/images (38).jpeg',
      '/jdm/supra mk4/images (39).jpeg',
      '/jdm/supra mk4/images (40).jpeg',
      '/jdm/supra mk4/images (41).jpeg'
    ],
    caption: 'TOYOTA SUPRA, The Toyota Supra is one of the most legendary and iconic sports cars to emerge from Japan, and the JDM Toyota Supra holds a special place in the hearts of car enthusiasts worldwide. Known for its incredible performance, tuning potential, and motorsport heritage, the Supra has become a symbol of the Japanese performance car scene, particularly in the JDM (Japanese Domestic Market) world.' 
  },
  { src: [
      '/jdm/siliva s15/images (30).jpeg',
      '/jdm/siliva s15/images (31).jpeg',
      '/jdm/siliva s15/images (32).jpeg',
      '/jdm/siliva s15/images (33).jpeg'
    ],
    caption: 'NISSAN SILVIA S15, The Nissan Silvia S15 is one of the most beloved and iconic cars in the JDM (Japanese Domestic Market) world, especially among drift enthusiasts and performance car fans. It represents the final evolution of the Nissan Silvia line, a series of compact sports cars that had a reputation for exceptional handling, tuning potential, and a connection to motorsports, particularly drifting.'
  }
];


const previewContainer = document.querySelector('.modal-preview-image');
const modal = document.getElementById('myModal');
const caption = document.getElementById('caption');
const modalImages = document.querySelectorAll('.modal-image');
const previewImg = document.querySelector('.modal-preview-image img');
const closePreviewBtn = document.querySelector('.close-preview');
const modalContent = document.querySelector('.modal-content');

// Function to toggle the preview container
function togglePreviewContainer(action) {
  if (action === "open") {
    previewContainer.style.display = 'grid';
    modalContent.style.display = 'none';
  } else if (action === "close") {
    previewContainer.style.display = 'none';
    modalContent.style.display = 'grid';
  }
}

// Function to open modal
function openModal(index) {
  const data = images[index];
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  modalImages.forEach((image, i) => {
    image.src = data.src[i];
    image.addEventListener('click', () => {
      previewImg.src = image.src;
      togglePreviewContainer("open");
      modal.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    previewImg.addEventListener('click', () => {
      togglePreviewContainer("close");
    });
    closePreviewBtn.addEventListener('click', () => {
      togglePreviewContainer("close");
    });
  })
  caption.innerHTML = data.caption;    
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  togglePreviewContainer("close");
}

// Close the modal if the user clicks anywhere outside the modal image
window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    closeModal();
  }
}
