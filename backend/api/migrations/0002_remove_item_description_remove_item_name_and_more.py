# Generated by Django 5.0.6 on 2024-07-09 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='description',
        ),
        migrations.RemoveField(
            model_name='item',
            name='name',
        ),
        migrations.AddField(
            model_name='item',
            name='bloodType',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='citizenship',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='civilStatus',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='dateOfBirth',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='email',
            field=models.EmailField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='firstName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='height',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='lastName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='middleName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='phone',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='placeOfBbirth',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='residentialAddress',
            field=models.TextField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='sex',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='weight',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='zipCode',
            field=models.CharField(default='', max_length=100),
        ),
    ]
