const onSubmit = () => {
    console.log('submitted!')
}

const onCancel = () => {
    console.log('onBefore cancelled!')
}

export const INFO = {
    headline: 'Attention!',
    description: `You can skip this step now, but you will have 
        to upload you passport later. The most convenient way is to upload it now.`,
    submitLabel: 'Upload now',
    cancelLabel: 'Skip',
    onSubmit,
    onCancel,
}
