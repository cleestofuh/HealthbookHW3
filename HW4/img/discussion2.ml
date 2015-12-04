
let rec count n =
  if n <= 0 then
    []
  else
    n :: count (n-1)

let _ = count 4;;



let x = 1 :: 2 :: 3 :: []


let _ = match x with
 | []     -> []
 | h :: t -> t


let _ = [1;2] = [1;2]




let count' n =

  let rec helper acc m =
    if m <= 0 then
      acc
    else
      helper (m :: acc) (m-1)

  in helper [] n

let _ = count' 4;;


let xs = [1;2;3]

let rec incrAllBy5 xs = match xs with
 | []     -> []
 | h :: t -> h + 5 :: incrAllBy5 t

let _ = incrAllBy5 xs

let rec incrAllBy6 xs = match xs with
 | []     -> []
 | h :: t -> h + 6 :: incrAllBy6 t

let rec incrAllByN n xs = match xs with
 | []     -> []
 | h :: t -> h + n :: incrAllByN n t

let _ = incrAllByN 6 xs

let incrAllBy5 = incrAllByN 5
let incrAllBy6 = incrAllByN 6

let _ = incrAllBy5 xs

let rec multAllByN n xs = match xs with
 | []     -> []
 | h :: t -> h * n :: multAllByN n t

let rec opAllByN op n xs = match xs with
 | []     -> []
 | h :: t -> op h n :: opAllByN op n t
 
 let incrAllByN = opAllByN (+)
 
 let _ = incrAllByN 5 xs
 
 let rec map f xs = match xs with
 | []     -> []
 | h :: t -> f h :: map f t

let incrAllBy5 = map (fun x -> x + 5)

let _ = incrAllBy5 xs

let _ = map (fun x -> x * 2 + 5 mod 10) xs


let xs = [1;2;3;4;5]

let isEven x = x mod 2 = 0

let rec onlyEvens xs = match xs with
  | []     -> []
  | h :: t -> let restEvens = onlyEvens t in
              if isEven h
              then h :: restEvens
              else restEvens
              
let _ = onlyEvens xs

let rec onlyOdds xs = match xs with
  | []     -> []
  | h :: t -> let restOdds = onlyOdds t in
              if not (isEven h)
              then h :: restOdds
              else restOdds

let rec filter f xs = match xs with
  | []     -> []
  | h :: t -> let rest = filter f t in
              if f h
              then h :: rest
              else rest

let _ = filter (fun x -> not (isEven x)) xs

