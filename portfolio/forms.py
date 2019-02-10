from django import forms
from django.forms import CharField, Form

class SettingsForm(forms.ModelForm):
    name = forms.CharField(max_length=80, required=True, label='Nom')
    email = forms.EmailField(max_length=254, required=True)
    message = forms.TextField(max_length=254, required=True, label='Message')

    class Meta:
        model = User
        fields = ('name', 'email', 'message')

    def save(self):
        form = super(SettingsForm, self).save(commit=False)
        return form