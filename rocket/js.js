window.onload = function () {
    let lauNch = document.getElementsByTagName("input");
    let pasWord = document.getElementById("password");
    let butOk = document.getElementById("button");
    let lauN = document.getElementById("launch");

    function remove() {
        for (let i = 0; i <= lauNch.length; i++) {
            if (pasWord.value !== "TrustNo1") {
                lauNch[i].disabled = true;
                pasWord.disabled = false;
                butOk.disabled = false;
            } else {
                lauNch[i].disabled = false;
                pasWord.disabled = true;
                butOk.disabled = true;
                lauN.disabled = true;
            }
        }
    }

    butOk.addEventListener("click", remove)
}


function checkChange() {
    let lauN = document.getElementById("launch");
    let totalCheckbox = document.querySelectorAll('input[class="checkMax"]').length;
    let totalChecked = document.querySelectorAll('input[class="checkMax"]:checked').length;
    let range1 = document.getElementById("range1").value;
    let range2 = document.getElementById("range2").value;
    let range3 = document.getElementById("range3").value;
    let range4 = document.getElementById("range4").value;
    let range5 = document.getElementById("range5").value;
    let maxRange = range1 + range2 + range3 + range4 + range5;

    lauN.disabled = (totalCheckbox === totalChecked && maxRange === "100100100100100") === false;
}

function rocketAnim() {
    const divElem = document.getElementById('twojstara');

    let rotate360 =  [{ // current position of your rocket
            left: '250px',
            bottom: '250px'
        },
        { //  final position of your rocket
            left: '500px',
            bottom: '507px'
        }
];

    let slowInfinite = {
        duration: 5000,
        iterations: Infinity
    }

    divElem.animate( rotate360, slowInfinite );
}