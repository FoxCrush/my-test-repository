const a = { Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' };
const b = { Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' };

function checkReadyFire(array) {
  if (Object.values(array).includes('nay')) {
    console.log('Wait...');
  } else {
    console.log('FIRE');
  }
}
checkReadyFire(a);
checkReadyFire(b);
