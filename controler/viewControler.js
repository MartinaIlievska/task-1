const Kurs = require('../pkg/model/kursModel');

exports.viewKursevi = async (req, res) => {
    try {
        const kursevi = await Kurs.find();
        res.status(200).render('welcome', {
            title:'Site kursevi',
            kursevi,
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.viewTest = async (req,res) => {
    try {
        res.status(200).render('test', {
            title: 'Test',
            podnaslov: 'Test za backend razvoj na softver',
        });

    } catch(err) {
        res.status(500).send(err.message);
    }
};

exports.getLoginForm = async (req, res) => {
  try {
    res.status(200).render('login', {
      title: 'Login',
      podnaslov: 'Login to see kursevi',
    });
  } catch (err) {
    res.status(500).send('Error');
  }
};