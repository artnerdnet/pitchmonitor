# Pitch Please
A package made in Typescript to process sound to detect pitch.

## Installation
`npm install pitchplease` or `yarn add pitchplease`

To import pitchplease:

`import * as PitchPlease from 'pitchplease'`

## API
### calculateAmplitudes
Uses the Fourier decomposition function to break down the sound wave into several pitches.

### interpretCorrelations

### findDominantFrequency
Find the dominant frequency given within the notes frequencies.

### computeMagnitudes
Compute the (squared) magnitudes of the complex amplitudes for each note frequency

### calculateAverageMagnitudeValues
Calculates the average magnitude values.

### findMaximumMagnitude
Find the maximum magnitude in the array.

### calcNotesFreq
Calculates the frequencies of the notes given.

### calcEqualTemperamentFreq
The equal temperament is the most widely used tuning system, dividing the intervals into equal steps (fn = f0 * (A)n).

### getScalesWithinRange
Given the starting and ending notes, it calculates all the notes in between.

### getAllFrequencies
Gets the frequencies of all given notes on an array.


## References, credits & references
[Making a guitar tuner](jonathan.bergknoff.com/journal/making-a-guitar-tuner-html5)

[Music and Coding](https://www.youtube.com/watch?v=XCVY8eVwfvI&t=671s&ab_channel=MusicandCoding)

[Web Audio API](https://webaudio.github.io/web-audio-api/)

[Sound on Sound: What's In A Sound?](https://www.soundonsound.com/techniques/whats-sound)

[Standardized audio context](https://github.com/chrisguttandin/standardized-audio-context)

[Notes Frequencies](https://pages.mtu.edu/~suits/notefreqs.html)