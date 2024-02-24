const btn = document.querySelector(".changeColorBtn");
btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    function: pickColor,
  });
});

async function pickColor() {
    try {
        //Picker
        const eyeDropper = new EyeDropper();
        const selectedColor = await eyeDropper.open();
        console.log(selectedColor);
    } catch (error) {
        console.log(error);
    }
}
