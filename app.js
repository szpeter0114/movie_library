const app = Vue.createApp({
    data() {
        return {
            titles: ['Predator', 'Terminator', 'Conan the Barbarian', 'Total Recall'],
            selectedTitle: '',
            covers: ['https://www.mobygames.com/images/covers/l/220956-predator-zx-spectrum-front-cover.jpg',
                'https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg',
                'https://m.media-amazon.com/images/M/MV5BMWYwZGU1N2UtNTU5My00ZTVkLThjZDktZTQzZmEyMzZjMTdmXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4Yy00MTFlLWE3NTUtNzI3YjkwZTMxZjZmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_FMjpg_UX1000_.jpg',
            ],
            plots: ['A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.',
                'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her 10-year old son John from an even more advanced and powerful cyborg.',
                'A young boy, Conan, becomes a slave after his parents are killed and tribe destroyed by a savage warlord and sorcerer, Thulsa Doom. When he grows up he becomes a fearless, invincible fighter. Set free, he plots revenge against Thulsa Doom.',
                'When a man goes in to have virtual vacation memories of the planet Mars implanted in his mind, an unexpected and harrowing series of events forces him to go to the planet for real - or is he?',
            ],
            selectedPlot: '',
            years: [1987, 1991, 1982, 1990],
            selectedYear: '',
            display: true,
        }
    },
    methods: {
        showInfo(index) {
                this.selectedTitle = this.titles[index];
                this.selectedPlot = this.plots[index];
                this.selectedYear = this.years[index];
        }
    }
})
app.mount('#app')