(async function () {
    setGameMetrics(3840, 2160, 2);
    keyPress("b");
    await sleep(1500);
    click(1350, 90);
    await sleep(1240);
    click(1310, 2030);
    await sleep(1000);
    click(580, 2030);
    await sleep(1240);
    click(250, 300);
    await sleep(500);
    click(250, 450);
    await sleep(500);
    click(250, 600);
    await sleep(500);
    click(250, 750);
    await sleep(500);
    click(700, 2030);
    await sleep(1240);
    click(3500, 2030);
    await sleep(1240);
    click(2300, 1500);
    await sleep(1000);
    keyPress("Escape");
    await sleep(800);
    keyPress("Escape");
    await sleep(1000);
    keyPress("Escape");
    await sleep(1000);

    log.info("已分解狗粮");
})();