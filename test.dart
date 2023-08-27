void main(){
  List<String> tags = ['faith', 'failure'];
  print(tags.contains('faith'));
  print(tags.contains('Faith'));
  print(tags.contains('FAITH'));

  User me = User(name: 'Mbah Lesky', age: 19), him;
  print('Me now: $me');

  me.dateJoined = DateTime.now().add(const Duration(days: 5));
  me.age = 20;
  me.name = 'Lespa';
  
  him = User(age: 23, name: 'Elkay');

  print('Me then: $me');
  print('$him == $me');
  print(him == me);
}

class User {
  late String _name;
  late int _age;
  late DateTime dateJoined;

  set name(String value) => _name = value;
  set age(int value) => _age = value;

  String get name => _name;
  int get age => _age;

  User({required String name, required int age}){
    _name = name;
    _age = age;
    dateJoined = DateTime.now();
  }

  @override
  String toString(){
    return 'Name: $name | Age: $age | Date Joined: $dateJoined';
  }
}