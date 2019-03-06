<?php
require 'vendor/autoload.php';

 $maxCount = 100;

function getSequence() {
   
    $values = [];

    for ($i=0; $i < $maxCount; $i++) {
        if($values[$i]=== 0)
        {
            $values[$i] = 0;           
        }
        elseif ($i === 1)
        {
            $values[$i] = 1;
        } 
        else
        {
            $values[$i] = $values[$i-1] + $values[$i -2];
        }       
        echo "Fibonaccisequence: {$values[$i]} => ";
    }   
}

$recValues = [];

function getRecursiveSequence($index = 0) {   
   if($index < $maxCount)
   {
    if($recValues[$i]=== 0)
    {
        $recValues[$i] = 0;           
    }
    elseif ($i === 1)
    {
        $recValues[$i] = 1;
    } 
    else
    {
        $recValues[$i] = $recValues[$i-1] + $recValues[$i -2];
    }  
    echo "Recursive Fibonaccisequence: {$values[$i]} => ";     
    getRecursiveSequence($index);
   }
}

function noArraySequence() {
    $index = 0;
    $n1 = 0;
    $n2 = 0;
    $temp = 0;

    while ($index < $maxCount) {
       $temp = $n1 + $n2;
       echo "{$temp} =>";
       $n2=$n1;
       $n1= $temp;      
       $index++;       
    }
}







