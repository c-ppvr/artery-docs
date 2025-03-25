# Sanguinity

**Sanguinity** is a property exclusive to players. It is also the core of the mod.
Its value is shown on the HUD above the hunger bar.

## Obtianing

Players gain 1 sanguinity for every $T$ damage they've dealt, where $T$ denotes [transfusion rate](#transfusion-rate).
::: info
This is a simplified explanation! The exact [formula](#formula) is shown at the bottom of this page.
:::

They also gain sanguinity by eating certain types of food, mostly meat.

## Usage

Players will automatically spend $C$ sanguinity to restore 1 health if they are injured, where $C$ denotes [coagulation rate](#coagulation-rate).

Sanguinity can be stored in [organ groups](./organ-block/index.md#organ-group) to power [organ blocks](./organ-block/index.md).

## Transfusion Rate

Transfusion rate determines how much damage should be done to gain 1 sanguinity. The base transfusion rate is 4 but can be improved by some equipments.

## Coagulation Rate

Coagulation rate determines how much sanguinity is needed to restore 1 health. The base coagulation rate is 4 but can be improved by some equipments.

## Formula

Sanguinity gained is given by
$$\text{Sanguinity} = \frac{D}{T\mu},$$
where
$$\mu = \begin{cases}  1 &\text{if damage is melee} \\ \max\left(1 ,\frac{\text{distance to target}}4\right) &\text{otherwise} \end{cases},$$
$D =$ damage taken by the target, and $T =$ transfusion rate.
