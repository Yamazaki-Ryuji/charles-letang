<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Egulias\EmailValidator\Validation\EmailValidation;
use Egulias\EmailValidator\Validation\NoRFCWarningsValidation;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Type;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Hostname;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;
use Symfony\Component\Validator\Exception\InvalidArgumentException;
use Symfony\Component\Validator\Exception\LogicException;
use Egulias\EmailValidator\EmailValidator as EguliasEmailValidator;
use Egulias\EmailValidator\EmailValidator as StrictEmailValidator;
use Symfony\Component\Validator\Constraints as Assert;



class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('fullName',TextType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Votre nom'], 
                'constraints' => new Length(['min' =>'2', 'max' => '35'])
            ])
            ->add('email',EmailType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Votre email'], 
                'constraints' => new Hostname()
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