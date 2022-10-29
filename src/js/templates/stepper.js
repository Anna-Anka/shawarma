export const stepperFunction = () => {
    if (document.querySelector('.stepper')) {
        const stepper = document.querySelector('.stepper');
        const stepperInput = stepper.querySelector('.stepper__input');
        const stepperBtnUp = stepper.querySelector('.stepper__btn--up');
        const stepperBtnDown = stepper.querySelector('.stepper__btn--down');

        const stepperInputWidth = () => {
            if (isNotApple) {
                stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
            } else {
                stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
            }
        }

        const stepperCount = () => {
            if (count == 1) {
                stepperBtnDown.classList.add('stepper__btn--disabled');
            } else {
                stepperBtnDown.classList.remove('stepper__btn--disabled');
            }
        }

        let count = stepperInput.value;

        const isNotApple = () => {
            if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                return false;
            }
            return true;
        };

        stepperInput.addEventListener('keyup', (e) => {
            let self = e.currentTarget;

            if (self.value == '0') {
                self.value = 1;
            };

            stepperInputWidth();

            count = stepperInput.value;

            stepperCount();
        });

        stepperInput.addEventListener('change', (e) => {
            let self = e.currentTarget;

            if (!self.value) {
                self.value = 1;
            };

            count = stepperInput.value;

            stepperCount();
        });

        stepperBtnUp.addEventListener('click', (e) => {
            e.preventDefault();

            count++;

            stepperCount();

            stepperInput.value = count;

            stepperInputWidth()
        });

        stepperBtnDown.addEventListener('click', (e) => {
            e.preventDefault();

            count--;

            stepperCount();

            stepperInput.value = count;

            stepperInputWidth()
        });
    }
}

