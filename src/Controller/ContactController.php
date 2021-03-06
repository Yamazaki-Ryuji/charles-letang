<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(Request $request, MailerInterface $mailer)
    {
        $form = $this->createForm(ContactType::class);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $contactFormData = $form->getData();            
            $message = (new Email())
                ->from($contactFormData['email'])
                ->to('letang.charles@orange.fr')
                ->subject('Formulaire de contact du portfolio de Charles Létang')
                ->text('Message de '.$contactFormData['fullName'].\PHP_EOL
                    .$contactFormData['email'].\PHP_EOL
                    .\PHP_EOL
                    .$contactFormData['subject'].\PHP_EOL
                    .\PHP_EOL
                    .$contactFormData['message'],
                    'text/plain');
                    $mailer->send($message);

            $this->addFlash('success', 'Votre message a été envoyé');
            return $this->redirectToRoute('confirmation');
        }
        return $this->render('contact/index.html.twig', [
            'our_form' => $form->createView()
        ]);
    }
    
}