"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log('RUN ON SERVER')
    console.log(formData.get('senderEmail'))
    console.log(formData.get('message'))

    resend.emails.send({
        from: 'qweqweqweqwe@gmail.com',
        to: 'tevidma@gmail.com',
        subject: 'message frmo contact form',
        text: `'asdasdasdadasdadasdas'`
    })
}