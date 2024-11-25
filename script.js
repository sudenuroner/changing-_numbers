// html de number sınıfına sahip tüm öğeleri seç ve bir diziye yerleştir
const items = [...document.querySelectorAll(".number")];

// sayıları güncellemek için bir fonksiyon oluştur
const updateCount = (el) => {
    // verilen öğenin "data-value" özelliğini kullanarak hedef sayııyı al
    const value = parseInt(el.dataset.value);

    // sayının kaç birimlik artacağını hesapla
    //örneğin 1000 birimlik arttırılabilir
    const increment = Math.ceil(value / 1000);
    // const increment = 1 (hızlı artış için bu satırı kullanabilirsin)

    //başlangıç değerini sıfıra ayarla
    let initalValue = 0;

    //sayıyı arttırmak için
    const increaseCount = setInterval(() => {
        // başalangıç değerini arttır
        initalValue += increment;

        // eğer başlangıç değeri hedef değeri aşarsa 
        if (initalValue > value) {
            el.textContent = `${value}`;
            clearInterval(increaseCount);
            return;
        }

        // öğenin metnini güncelle 
        el.textContent = `${initalValue};`
    }, 1);
};

items.forEach(item => {
    updateCount(item);
});