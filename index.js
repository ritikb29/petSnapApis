const img1 = document.getElementById('img1');
        let currentAnimal = 'cat'; // Default to cat

        function changeImage() {
            if (currentAnimal === 'cat') {
                fetchCatImage();
            } else if (currentAnimal === 'dog') {
                fetchDogImage();
            }
        }

        function showCatImages() {
            currentAnimal = 'cat';
            document.getElementById("container2").style.display = 'block';
            document.getElementById("drop").style.display = 'none';
            fetchCatImage();
        }

        function showDogImages() {
            currentAnimal = 'dog';
            document.getElementById("container2").style.display = 'block';
            document.getElementById("drop").style.display = 'none';
            fetchDogImage();
        }

        function fetchCatImage() {
            fetch('https://api.thecatapi.com/v1/images/search?limit=1')
                .then(res => res.json())
                .then(data => {
                    img1.src = data[0].url;
                    img1.style.width = "500px";
                    img1.style.height = "400px";
                })
                .catch(error => console.error('Error fetching the cat image:', error));
        }

        function fetchDogImage() {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
                .then(data => {
                    img1.src = data.message;
                    img1.style.width = "500px";
                    img1.style.height = "400px";
                })
                .catch(error => console.error('Error fetching the dog image:', error));
        }

        function goBack() {
            document.getElementById("container2").style.display = 'none';
            document.getElementById("drop").style.display = 'block';
        }
    