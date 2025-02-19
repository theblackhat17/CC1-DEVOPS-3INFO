import pytest

# Test basique
def test_addition():
    assert 1 + 1 == 2

# Test sur les chaînes de caractères
def test_string_upper():
    assert "hello".upper() == "HELLO"

# Test sur une liste
def test_list_append():
    my_list = []
    my_list.append(5)
    assert my_list == [5]

# Test sur un dictionnaire
def test_dict():
    my_dict = {"key": "value"}
    assert my_dict["key"] == "value"

# Test qui échoue volontairement (pour voir le comportement)
@pytest.mark.xfail
def test_fail():
    assert 1 + 1 == 3

# Test avec une exception
def test_raises_exception():
    with pytest.raises(ZeroDivisionError):
        1 / 0

# Test paramétré (plusieurs cas d'un coup)
@pytest.mark.parametrize("a, b, expected", [(1, 2, 3), (5, 5, 10), (-1, 1, 0)])
def test_addition_multiple_cases(a, b, expected):
    assert a + b == expected
