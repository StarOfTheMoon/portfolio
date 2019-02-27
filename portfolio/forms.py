from django import forms
from django.forms import CharField

class SettingsForm(forms.Form):
    name = forms.CharField(initial="", max_length=80, required=True, label='Nom')
    email = forms.EmailField(initial="", max_length=254, required=True)
    message = forms.CharField(initial="", max_length=254, required=True, label='Message')
