(() => {
    let yOffset = 0 // window.pageYOffset
    let currentScene = 0 // 현재 활성화된(눈 앞에 보고 있는) scene(scroll-section)

    const sceneInfo = [
        {
            type: 'sticky',
            heightNum: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0'),

            },
            values: {

            }
        },
        {
            type: 'sticky',
            heightNum: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1'),

            },
            values: {

            }
        },
        {
            type: 'sticky',
            heightNum: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2'),

            },
            values: {

            }
        },

    ]

    function setLayout() {
        // 각 scroll section 의 높이 setting
        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'sticky') {
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight // window.innerHeight 브라우저 창 높이
            } else if (sceneInfo[i].type === 'normal') {
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight
            }
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }

        let totalScrollHeight = 0
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight
            if (totalScrollHeight >= pageYOffset) {
                currentScene = i
                break
            }
        }

        document.body.setAttribute('id', `show-scene-${currentScene}`)
    }

    function scrollLoop() {
        // 현재 보이는 scroll section
        prevScrollHeight = 0
        enterNewScene = false

        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            enterNewScene = true
            currentScene++
            document.body.setAttribute('id', `show-scene-${currentScene}`)
        }

        if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return // 브라우저 바운스 효과로 마이너스가 되는 것을 방지
            enterNewScene = true
            currentScene--
            document.body.setAttribute('id', `show-scene-${currentScene}`)
        }

        if (enterNewScene) return

        playAnimation()
    }


    function playAnimation() {
        const objs = sceneInfo[currentScene].objs
        const values = sceneInfo[currentScene].values
        const currentYOffset = yOffset - prevScrollHeight
        const scrollHeight = sceneInfo[currentScene].scrollHeight
        const scrollRatio = currentYOffset / scrollHeight

        switch (currentScene) {
            case 0:
                console.log('0 play')
                break
            case 1:
                console.log('1 play')
                break
            case 2:
                console.log('2 play')
                break
        }
    }


    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset
        scrollLoop()
    })
    window.addEventListener('load', setLayout) // content들 까지 loading 된 후 실행
    // window.addEventListener('DOMContentLoaded', setLayout) 실행 시점이 좀 더 빠름, DOM 객체가 loading 된 후
    window.addEventListener('resize', setLayout)
})()