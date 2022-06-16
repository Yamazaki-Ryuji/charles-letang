<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('fullName',TextType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Votre nom']
            ])
            ->add('email',EmailType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Votre email']
            ])
            ->add('subject',TextType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Sujet']
            ])
            ->add('message', TextareaType::class, [
                'label' => false, 
                'attr' => ['placeholder' => 'Votre message']
            ])
            ->add('check', CheckboxType::class, [
                'label' => 'En cochant cette case, vous acceptez la politique de confidentialité.' 
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}